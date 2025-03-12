function download_pdf() {
    const pdfContent = document.getElementById("all");

    html2pdf()
        .set({
            margin: 0,
            filename: "lost_and_found_report.pdf",
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 5 },
            jsPDF: { unit: 'mm', format: [155, 105], orientation: 'portrait' } // الأبعاد مقسمة على 2
        })
        .from(pdfContent)
        .save();
}
