function Header(props) {
    return (
        <div id="header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/covid.png'} className="logo_image" alt='something' />
            </div>
            <div className="pro_name">
                <h2>Covid-19</h2>
                <h2 className="management">Manager</h2>
                <h2>App</h2>
            </div>
            <div className="header_image_container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/1.jpg` }} />
        </div>
    )
}
export default Header