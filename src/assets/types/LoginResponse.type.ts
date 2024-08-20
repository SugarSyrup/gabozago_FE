export interface LoginResponse {
  status: 'ACTIVE' | 'INACTIVE';
  access: string;
  access_expires_at: string;
  refresh_expires_at: string;
  user_data: {
    email?: string;
    nickname?: string;
    uuid: string;
  };
}
