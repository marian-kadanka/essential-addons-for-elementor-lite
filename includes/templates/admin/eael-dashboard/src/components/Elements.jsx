import ElementsSubSection from "./ElementsSubSection.jsx";
import consumer from "../context";
import ElementCategoryBox from "./ElementCategoryBox.jsx";
import ElementsSearchSection from "./ElementsSearchSection.jsx";
import {useRef, useEffect} from "react";
import {debounce} from "../helper";

function Elements() {
    const eaData = localize.eael_dashboard.widgets,
        {eaState, eaDispatch} = consumer(),
        checked = eaState.widgetAll,
        i18n = localize.eael_dashboard.i18n,
        changeHandler = (e) => {
            eaDispatch({type: 'ON_CHANGE_ALL', payload: {key: 'widgetAll', value: e.target.checked}});
        },
        searchParam = useRef(),
        categoryRef = useRef(),
        subCatRef = useRef(),
        newScroll = {},
        onSearch = () => {
            let results = {},
                searchTerm = searchParam.current.value,
                categoryTerm = categoryRef.current.value;

            if (categoryTerm !== '') {
                for (const key in eaData[categoryTerm].elements) {
                    if (eaData[categoryTerm].elements[key].title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        results[key] = eaData[categoryTerm].elements[key];
                    }
                }
            } else {
                Object.keys(eaData).map((item) => {
                    for (const key in eaData[item].elements) {
                        if (eaData[item].elements[key].title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            results[key] = eaData[item].elements[key];
                        }
                    }
                });
            }

            eaDispatch({type: 'ON_SEARCH', payload: {value: results}});
        },
        clickHandler = () => {
            eaDispatch({type: 'SAVE_ELEMENTS_DATA'});
        },
        scrollHandler = () => {
            newScroll.y = window.pageYOffset;
            const subCatChildren = subCatRef.current.children,
                subCatChildrenArr = [subCatChildren[8]?.offsetTop,
                    subCatChildren[7]?.offsetTop,
                    subCatChildren[6]?.offsetTop,
                    subCatChildren[5]?.offsetTop,
                    subCatChildren[4]?.offsetTop,
                    subCatChildren[3]?.offsetTop,
                    subCatChildren[2]?.offsetTop,
                    subCatChildren[1]?.offsetTop,
                    subCatChildren[0]?.offsetTop,];
            let currentActivateCatIndex = 0;

            if (window.pageYOffset > subCatChildren[8]?.offsetTop) {
                currentActivateCatIndex = 8;
            } else if (window.pageYOffset > subCatChildren[7]?.offsetTop) {
                currentActivateCatIndex = 7;
            } else if (window.pageYOffset > subCatChildren[6]?.offsetTop) {
                currentActivateCatIndex = 6;
            } else if (window.pageYOffset > subCatChildren[5]?.offsetTop) {
                currentActivateCatIndex = 5;
            } else if (window.pageYOffset > subCatChildren[4]?.offsetTop) {
                currentActivateCatIndex = 4;
            } else if (window.pageYOffset > subCatChildren[3]?.offsetTop) {
                currentActivateCatIndex = 3;
            } else if (window.pageYOffset > subCatChildren[2]?.offsetTop) {
                currentActivateCatIndex = 2;
            } else if (window.pageYOffset > subCatChildren[1]?.offsetTop) {
                currentActivateCatIndex = 1;
            }

            if(eaState.elementsActivateCatIndex){

            }

            console.log(currentActivateCatIndex, newScroll.y, subCatChildrenArr);
        };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        console.log('didmount scroll');
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            console.log('unmount scroll');
        };
    }, []);

    return (
        <>
            <div className="ea__elements-nav-content">
                <div className="ea__content-header sticky">
                    <div className="ea__content-info flex justify-between items-center gap-2">
                        <div className="ea__widget-elements flex items-center">
                            <h4>Elements</h4>
                            <div className="search--widget flex">
                                <input ref={searchParam} onChange={debounce(onSearch, 500)} className="input-name"
                                       type="search"
                                       placeholder="Search by name"/>
                                <div className="select-option-wrapper">
                                    <select ref={categoryRef} onChange={debounce(onSearch, 100)} name="select"
                                            id="select-option"
                                            className="form-select">
                                        <option value="">{i18n.all_widgets}</option>
                                        {Object.keys(eaData).map((item, index) => {
                                            return <option value={item} key={index}>{eaData[item].title}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ea__enable-elements">
                            <div className="toggle-wrapper flex items-center gap-2">
                                <h5>{i18n.enable_all_elements}</h5>
                                <label className="toggle-wrap">
                                    <input type="checkbox" checked={checked} onChange={changeHandler}/>
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="ea__content-icon flex">
                        {Object.keys(eaData).map((item, index) => {
                            return <ElementCategoryBox index={item} key={index}/>
                        })}
                    </div>
                </div>
                <div className="ea__content-elements-wrapper relative" ref={subCatRef}>
                    {!!searchParam?.current?.value || Object.keys(eaData).map((item, index) => {
                        return <ElementsSubSection index={item} key={index}/>
                    })}
                    {!!searchParam?.current?.value && <ElementsSearchSection searchTerm={searchParam.current.value}/>}
                </div>


                <div className="ea__elements-button-wrap">
                    <button className="primary-btn install-btn" onClick={clickHandler}>{i18n.save_settings}</button>
                    <div className="ea__section-overlay">
                    </div>
                </div>

            </div>
        </>
    );
}

export default Elements;