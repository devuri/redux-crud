// Taken from https://github.com/github/fetch/issues/256#issuecomment-241613757
export const encodeParams = params => Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
