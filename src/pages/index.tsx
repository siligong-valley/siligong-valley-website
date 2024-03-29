import React from "react";
import Page from "../components/Page";
import Seo from "../components/Seo";

export default () => {
    const title = "Siligong Valley";

    return (
        <Page>
            <Seo />
            {title}
        </Page>
    );
};
