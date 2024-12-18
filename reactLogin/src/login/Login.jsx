import "./Login.css"
function Login() {
    return (
        <div>
            <div className="circulo uno"></div>
            <div className="circulo dos"></div>
            
            <form action="#" method="get">
                <h3>Inicia Sesion</h3>

                <label htmlFor="usuario">Usuario</label>
                <input type="text" placeholder="Ingrese el usuario" id="usuario" />
                <label htmlFor="contraseña">Contraseña</label>
                <input type="password" placeholder="Ingrese la contraseña" id="contraseña" />
                <input type="submit" value="Iniciar Sesion" />
            </form>
        </div>
    )
}

export default Login;