import { useNavigate } from "react-router-dom";
import LeftChevronIcon from "../../assets/icons/leftChevron.svg?react";

function BackButton() {
    const navigate = useNavigate();
    return (
        <LeftChevronIcon
            onClick={() => {
                navigate(-1);
            }}
        />
    );
}

export default BackButton;
