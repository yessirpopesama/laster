import Router from 'koa-router';
import * as controller from '../controller/articles';

let router = Router({
    'prefix': '/articles'
});

router.get('/', controller.getLists);
router.get('/:id', controller.getOneArticle);
router.post('/', controller.create);

export default router;