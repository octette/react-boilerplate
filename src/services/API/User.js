import Request from '../request';

export const getUsers = () => new Request().Get('users').End();
