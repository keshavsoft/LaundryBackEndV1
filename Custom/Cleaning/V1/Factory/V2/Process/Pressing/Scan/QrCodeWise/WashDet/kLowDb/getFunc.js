import { StartFunc as StartFuncPullData } from "../../../../../../../../../../../binV4/PressingScan/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as StartFuncFromPressingDC } from "../../../../../../../../../../../binV4/PressingDC/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as StartFuncFromWashingScan } from "../../../../../../../../../../../binV4/WashingScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFuncVoucherDet();

    return LocalReturnData;
};

const LocalFuncVoucherDet = () => {
    const LocalQrData = StartFuncPullData();
    const LocalVoucherDet = StartFuncFromPressingDC();
    const LocalWashingQrData = StartFuncFromWashingScan();

    const LocalClubbedData = LocalQrData.map(element => {
        const LocalFindVoucher = LocalVoucherDet.find(LoopVoucher => LoopVoucher.pk === element.VoucherRef);
        const LocalFindWashingQrData = LocalWashingQrData.find(LoopVoucher => LoopVoucher.QrCodeId === element.QrCodeId);

        let LoopInsideReturnObject = {
            ...element,
            VoucherDate: LocalFindVoucher?.Date,
            VoucherDescription: LocalFindVoucher?.Description,
            VoucherFactoryName: LocalFindVoucher?.FactoryName
        };

        LoopInsideReturnObject.WashingVoucher = LocalFindWashingQrData?.VoucherNumber;
        LoopInsideReturnObject.WashingDCDate = LocalFindWashingQrData?.DCDate;
        LoopInsideReturnObject.WashingDCDescription = LocalFindWashingQrData?.DCDescription;

        return LoopInsideReturnObject;
    });

    return LocalClubbedData;
};

export { StartFunc };
