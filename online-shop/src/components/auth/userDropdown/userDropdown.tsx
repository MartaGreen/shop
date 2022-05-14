import React from "react";
import { USER_ICON_HTML } from "../../../constants/icon.constants";
import Dropdown from "../../../shared/dropdown/dropdown";

function UserDropdown() {
  return (
    <Dropdown icon={USER_ICON_HTML} name='Аккаунт'>
      <div>
        <span>User</span>
        <span>Корзина</span>
        <span>Избранное</span>
      </div>
    </Dropdown>
  );
}

export default UserDropdown;
