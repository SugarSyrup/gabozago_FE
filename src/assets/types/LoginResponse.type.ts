export interface LoginResponse {
  status: 'ACTIVE' | 'INACTIVE';
  access_token: string;
  refresh: string;
  access_expires_at: string;
  refresh_expires_at: string;
  user_data?: {
    email: string;
    nickname: string;
  };
}
