// Function to copy text to clipboard
function copyToClipboard(text, tooltipId) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // Update tooltip text
    const tooltip = document.getElementById(tooltipId);
    tooltip.textContent = 'تم النسخ!';
    setTimeout(() => {
        tooltip.textContent = tooltipId === 'emailTooltip' ? 'نسخ البريد الإلكتروني' : 'نسخ رقم الهاتف';
    }, 2000);
}

// Add event listeners for email and phone number
document.getElementById('emailToCopy').addEventListener('click', () => {
    copyToClipboard('malfateh977@gmail.com', 'emailTooltip');
});
document.getElementById('phoneToCopy').addEventListener('click', () => {
    copyToClipboard('+963944359000', 'phoneTooltip');
});

// Add dynamic transitions when sections come into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2
    });
    sections.forEach(section => observer.observe(section));
});