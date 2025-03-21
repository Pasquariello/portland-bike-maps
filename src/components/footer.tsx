import { open_sans } from "@/ui/fonts";

const Footer = () => {
    return (
       
        <footer className={open_sans.className} style={{ fontWeight: 200, backgroundColor: '#424963', color: 'white', padding: '20px 0', marginTop: 80, }}>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
            <p>&copy; 2025 TaylorPasq</p>
            <a href="https://www.linkedin.com/company/altago/" target="_blank" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>LinkedIn</a>
                <a href="https://x.com/altafieldnotes" target="_blank" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Twitter</a>
                <a href="https://www.instagram.com/altafieldnotes/" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a>
            </div>
        </footer>
        
    )
}

export default Footer;