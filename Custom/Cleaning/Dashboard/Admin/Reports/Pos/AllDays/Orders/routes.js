import express from 'express';

var router = express.Router();

import { router as AllBranches } from './AllBranches/routes.js';
import { router as BranchWise } from './BranchWise/routes.js';
import { router as BranchFilter } from './BranchFilter/routes.js';
import { router as OrdersWithQRCount } from './OrdersWithQRCount/routes.js';
import { router as UpComingDelivery } from './UpComingDelivery/routes.js';

router.use('/AllBranches', AllBranches);
router.use('/BranchWise', BranchWise);
router.use('/BranchFilter', BranchFilter);
router.use('/OrdersWithQRCount', OrdersWithQRCount);
router.use('/UpComingDelivery', UpComingDelivery);


export { router };