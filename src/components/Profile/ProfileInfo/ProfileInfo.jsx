import React from "react";

import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.main__img} src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" alt="bcg" />
            </div>

            <div>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;