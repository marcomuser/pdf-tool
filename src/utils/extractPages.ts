import { PDFDocument } from "pdf-lib";

export const extractPages = async (
  file: File,
  from: string,
  to: string
): Promise<File> => {
  generateErrorMessages(Number(from), Number(to));

  // Serialize PDF Document
  const pdfBytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  removePages(pdfDoc, Number(from), Number(to));

  // Return PDF File Blob
  const newPdfBytes = await pdfDoc.save();
  return new File([newPdfBytes], `${file.name}_extract`, {
    type: "application/pdf",
  });
};

const generateErrorMessages = (from: number, to: number) => {
  if (from > to) {
    throw new Error("To page number can't be smaller than From");
  } else if (from <= 0 || to <= 0) {
    throw new Error("Page numbers should start at 1");
  }
};

const removePages = (pdfDoc: PDFDocument, from: number, to: number) => {
  const pages = pdfDoc.getPages();
  const fromIndex = from - 1;
  const toIndex = to - 1;
  pages.forEach((_, i) => {
    if (i < fromIndex) {
      pdfDoc.removePage(i);
    } else if (i > toIndex) {
      pdfDoc.removePage(i);
    }
  });
};
