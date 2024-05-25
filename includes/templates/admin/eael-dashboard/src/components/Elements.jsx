import ElementsSubSection from "./ElementsSubSection.jsx";
import consumer from "../context/index.js";
import ElementCategoryBox from "./ElementCategoryBox.jsx";

function Elements() {
    const eaData = localize.eael_dashboard.widgets,
        {eaState, eaDispatch} = consumer(),
        checked = eaState.widgetAll,
        i18n = localize.eael_dashboard.i18n,
        changeHandler = (e) => {
            eaDispatch({type: 'ON_CHANGE_ALL', payload: {key: 'widgetAll', value: e.target.checked}});
        };

    return (
        <>
            <div className="ea__elements-nav-content">
                <div className="ea__content-header sticky">
                    <div className="ea__content-info flex justify-between items-center gap-2">
                        <div className="ea__widget-elements flex items-center">
                            <h4>Elements</h4>
                            <div className="search--widget flex">
                                <input className="input-name" type="search" placeholder="Search by name "/>
                                <div className="select-option-wrapper">
                                    <select name="select" id="select-option" className="form-select">
                                        <option value="">All Widgets</option>
                                        <option value="1">Employees</option>
                                        <option value="2">Templates</option>
                                        <option value="3">Employees</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ea__enable-elements">
                            <div className="toggle-wrapper flex items-center gap-2">
                                <h5>Enable all Elements</h5>
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
                <div className="ea__content-elements-wrapper">
                    {Object.keys(eaData).map((item, index) => {
                        return <ElementsSubSection index={item} key={index}/>
                    })}
                    <div className="flex flex-end mb-6">
                        <button className="primary-btn install-btn">{i18n.save_settings}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Elements;