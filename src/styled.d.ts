// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
    }
}

declare module "*.png" {
    const value: any;
    export default value;
}