import Download from '../../../images/download.png';
import './btn.css';

const DownloadBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/resume.pdf";
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
    return (
        <div className = "wrapper">
        <img src = {Download} onClick={handleDownload} style = {{width:"2rem"}}/>
      <h1>Download my CV</h1>
      </div>
    );
  };
  
  export default DownloadBtn;