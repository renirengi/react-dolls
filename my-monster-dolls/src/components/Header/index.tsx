
function Header() {
    return (
        <>
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={60} height={60} src="/img/logo.png" alt="logo" />
                    <div>
                        <h3 className="text-uppercase">My Monster Dolls</h3>
                        <p className="opacity-5">Shop the best monsters</p>
                    </div>
                </div>

                <ul className="d-flex">
                    <li className="mr-20 cu-p">
                        <img width={18} height={18} src="/img/cart.svg" alt="logo" />
                    </li>
                    <li className="mr-30 cu-p">

                    <img width={18} height={18} src="/img/heart.svg" alt="logo"/>
                    </li>

                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt="logo" />
                    </li>

                </ul>
            </header>
        </>
    )
}
export default Header;