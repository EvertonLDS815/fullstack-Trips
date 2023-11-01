import { ReactNode } from "react";

function Layout({children}: {children: ReactNode}) {
    return (
        <>
            {children}
            <h1>
                Layout About
            </h1>
        </>
     );
}

export default Layout;