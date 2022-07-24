import { PDFDocument } from "pdf-lib";

export const extractPages = async (
  file: File,
  from: string,
  to: string
): Promise<File> => {
  // Serialize PDF Document
  const pdfBytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  removePages(pdfDoc, from, to);

  // Return PDF File Blob
  const newPdfBytes = await pdfDoc.save();
  return new File([newPdfBytes], `${file.name}_extract`, {
    type: "application/pdf",
  });
};

const removePages = (pdfDoc: PDFDocument, from: string, to: string) => {
  const pages = pdfDoc.getPages();
  const fromIndex = Number(from) - 1;
  const toIndex = Number(to) - 1;
  pages.forEach((_, i) => {
    if (i < fromIndex) {
      pdfDoc.removePage(i);
    } else if (i > toIndex) {
      pdfDoc.removePage(i);
    }
  });
};
