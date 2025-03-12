function download_pdf() {
    const { jsPDF } = window.jspdf; // استدعاء jsPDF بشكل صحيح

    const pdfContent = document.getElementById("all");

    html2canvas(pdfContent, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "tabloid"
        });

        const imgWidth = 280;
        const pageHeight = 500;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;

        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);

        if (imgHeight > pageHeight) {
            while (position + pageHeight < imgHeight) {
                position += pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, -position, imgWidth, imgHeight);
            }
        }

        pdf.save("lost_and_found_report.pdf");
    });
}
