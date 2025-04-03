<script>
 
document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

 
document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const format = document.querySelector('input[name="format"]:checked').value;
    let cvUrl = '';
    
    
    switch(format) {
        case 'pdf':
            cvUrl = 'J-CV.pdf';
            break;
        case 'docx':
            cvUrl = 'J-CV.docx';
            break;
        case 'txt':
            cvUrl = 'J-CV.txt';
            break;
    }
    
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `Mwangi_Josphat_Karanja_CV.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
     
    alert('Your download should begin shortly. Thank you!');
});
</script>