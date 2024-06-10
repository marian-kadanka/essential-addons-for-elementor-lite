import { useState } from "react";

function GettingStartedContent() {
  let eaelQuickSetup = localize?.eael_quick_setup_data;
  let menu_items = eaelQuickSetup?.menu_items;
  let wizard_column = menu_items?.wizard_column;
  let templately_status = menu_items?.templately_status;
  let items = menu_items?.items;
  let templately_local_plugin_data = menu_items?.templately_local_plugin_data;

  let i = 0;
  let isActive = '';
  let itemClass = '';

  return (
    <>
		<div className={`eael-onboard-nav-list flex justify-between ${eaelQuickSetup.menu_items.wizard_column}`} data-step="1">
            {items.map((item, index) => {
                // Conditional logic to skip certain items
                if (
                    (item === 'Templately' && templately_status) ||
                    (templately_local_plugin_data !== false && item === 'Templately')
                ) {
                    return null;
                }

                isActive = i === 0 ? 'active' : isActive;
                itemClass = item.trim().toLowerCase().replace(/ /g, '-');

                return (
                    <div className={`eael-onboard-nav ${isActive} ${itemClass}`} key={index}>
                        <span className="eael-nav-count">
                            {++i}
                        </span>
                        <span className="eael-nav-text">{item}</span>
                    </div>
                );
            })}
		</div>
    </>
  );
}

export default GettingStartedContent;