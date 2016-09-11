import { encodeParams } from '../../helpers/encode-params';

it('encodeParams should produce a valid query string', () => {
    const params = {
        num: 12,
        str: 'a space',
    }
    expect(encodeParams(params)).toEqual('num=12&str=a%20space');
});
