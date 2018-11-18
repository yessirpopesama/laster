export async function getLists(ctx, next) {
    let { page_size, page_index } = ctx.query;
    page_size = +page_size;
    page_index = +page_index;

    return []
}

export async function create(ctx, next) {

}

export async function getOneArticle(ctx) {
    return {}
}