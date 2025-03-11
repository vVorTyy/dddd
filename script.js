function download_pdf() {
    const pdfContent = document.getElementById("all");

    html2pdf()
        .set({
            margin: 0,
            filename: "lost_and_found_report.pdf",
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(pdfContent)
        .save();
}
