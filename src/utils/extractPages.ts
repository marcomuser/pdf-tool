import { PDFDocument } from "pdf-lib";

export const extractPages = async (
  file: File,
  from: string,
  to: string
): Promise<File> => {
  // Serialize PDF Document
  const pdfBytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  generateErrorMessages(pdfDoc, Number(from), Number(to));

  const extractedPdfDoc = await createPdf(pdfDoc, Number(from), Number(to));

  // Return PDF File Blob
  const newPdfBytes = await extractedPdfDoc.save();
  return new File([newPdfBytes], `${file.name}_extract`, {
    type: "application/pdf",
  });
};

const generateErrorMessages = (
  pdfDoc: PDFDocument,
  from: number,
  to: number
) => {
  if (from > to) {
    throw new Error("To page number can't be smaller than From");
  } else if (from <= 0 || to <= 0) {
    throw new Error("Page numbers should start at 1");
  } else if (to > pdfDoc.getPageCount()) {
    throw new Error("To page number is greater than PDF page count");
  }
};

const createPdf = async (pdfDoc: PDFDocument, from: number, to: number) => {
  const newPdfDoc = await PDFDocument.create();
  const pageIndexesToCopy = [...Array(to - (from - 1)).keys()].map(
    (el) => el + (from - 1)
  );
  const copiedPages = await newPdfDoc.copyPages(pdfDoc, pageIndexesToCopy);

  for (const page of copiedPages) {
    newPdfDoc.addPage(page);
  }

  return newPdfDoc;
};
