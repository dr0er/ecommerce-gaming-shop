import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Routes } from "../../Utilities/routes";

const BackToMain = () => {
	return (
		<Link to={Routes.mainPage}>
			<div className="flex gap-5 items-center text-base font-bold cursor-pointer w-max">
				<FontAwesomeIcon icon={faChevronLeft} />
				Back to main page
			</div>
		</Link>
	);
};

export default BackToMain;
