import React, {useState, useEffect} from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (lang) => {
        // e.preventDefault();
        // console.log("e.target.value",lang,i18n.language)
        i18n.changeLanguage(lang);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(lang);
        localStorage.setItem("lang", lang);
    }
    useEffect(()=>{
        i18n.changeLanguage(localStorage.getItem("lang")||"ar")
        setSelectedLanguage(localStorage.getItem("lang")||"ar");
    },[])
    return (
        <>
                    {/* <div className="form-check form-check-inline ps-0 ">
                <input className="btn-check" type="radio" name="langRadios" id="langRadios1" value="ar" checked={i18n.language === "ar"?true:false} onChange={chooseLanguage}/>
                <label className="btn px-0 rounded-0 text-custom-gold " htmlFor="langRadios1">AR</label>
            </div>
                    <div className="form-check form-check-inline ps-0">
                <input className="btn-check" type="radio" name="langRadios" id="langRadios2" value="en" checked={i18n.language === "en"?true:false} onChange={chooseLanguage}/>
                <label className="btn px-0 rounded-0 text-custom-gold" htmlFor="langRadios2">EN</label>
            </div> */}

            
<div className="flex flex-row justify-center select-none">
	<div className="flex flex-row items-center right-1 ">
		<button className={`p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 ${i18n.language === "en"?'bg-gray-100':''} hover:bg-gray-100 focus:bg-gray-200 focus:outline-none`}
                     
                     onClick={()=>chooseLanguage("en")}
                    >
                        <span  className="text-md">En</span>
                        <span className="ml-1"> <img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" className="w-5 h-5" /></span>
                    </button>

		<button className={`p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 ${i18n.language === "ar"?'bg-gray-100':''} hover:bg-gray-100 focus:bg-gray-200 focus:outline-none `}
                   
                   onClick={()=>chooseLanguage("ar")}
                   >
                        <span className="text-md">Ar</span>
                        
                         <span className="ml-1"> <img src="https://img.icons8.com/?size=512&id=yygWSzRjaqoL&format=png" className="w-5 h-5" /></span>
                    </button>
	</div>

</div>

        </>

    );
};

export default LanguageSelector;