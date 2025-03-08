let GetFunc = (req, res, next) => {
    let LocalParams = req.params;
    
    if (Object.values(LocalParams).length < 3) {
        res.status(404).json({
            KTF: false,
            KReason: "get Params should contain : ",
            body: LocalParams
        });
        return;
    };

    next();
};

export { GetFunc };