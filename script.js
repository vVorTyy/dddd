function download_pdf() {
    const pdfContent = document.getElementById("all");

    html2pdf()
        .set({
            margin: 0,
            filename: "lost_and_found_report.pdf",
            image: { type: 'jpeg', quality: 0.7 },
            html2canvas: { scale: 5 },
            jsPDF: { unit: 'mm', format: [80, 118.8], orientation: 'portrait' } // الأبعاد مقسمة على 2
        })
        .from(pdfContent)
        .save();
}
