import { StartFunc as StartFuncValidateToken } from "../../Token/jwt/ValidateToken.js";

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSAToken;
    let localResult = StartFuncValidateToken({ inToken: localClientToken });

    if (localResult === false) {
        res.status(401).send(`
            <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
                <h1 style="color: red;">Unauthorized</h1>
                <p style="font-size: 18px;">It seems like your session has expired or you're not logged in.</p>
                <p style="font-size: 18px;">Please <a href="/LoginUsers/HtmlFiles/loginAdmin.html" style="color: blue;">login</a> again to continue.</p>
                <img src="https://indexsy.com/wp-content/uploads/2023/06/how-to-fix-401-unauthorized-error.png" alt="Unauthorized" style="margin-top: 20px;"/>
            </div>
        `);
        return;
    }

    req.locals = {};
    req.locals.KeshavSoft = {}
    req.locals.KeshavSoft.DataPk = localResult;

    next();
};

export { StartFunc };