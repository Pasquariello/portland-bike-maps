import { open_sans } from "@/ui/fonts";

const Footer = () => {
    return (
        // <div style={{padding: '100px 200px', marginTop: 80, background: '#424963'}}>
        //     <p>Hello</p>
        // </div>
        <footer className={open_sans.className} style={{ fontWeight: 200, backgroundColor: '#424963', color: 'white', padding: '20px 0', marginTop: 80, }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Logo or Brand Name */}
        
    
            {/* Social Media */}
            <div>
                <h4>Follow Us</h4>
                <a href="https://www.linkedin.com/company/altago/" target="_blank" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>LinkedIn</a>
                <a href="https://x.com/altafieldnotes" target="_blank" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Twitter</a>
                <a href="https://www.instagram.com/altafieldnotes/" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a>
            </div>
            </div>
  
            {/* Copyright */}
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
            <p>&copy; 2025 YourBrand. All Rights Reserved.</p>
            </div>
        </footer>
        
    )
}

export default Footer;