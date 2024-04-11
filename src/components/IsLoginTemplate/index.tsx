import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

function IsLoginTemplate({children}:Props) {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("access_token")) {
            navigate("/")
        } else {
            navigate("/login");
        }
    }, [])

    return (
        <>{children}</>
    )
}

export default IsLoginTemplate;