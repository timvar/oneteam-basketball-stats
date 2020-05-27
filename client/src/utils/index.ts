interface Authorization {
  Authorization: string;
}

export interface AxiosAuthConfig {
  headers: Authorization;
}

export const setAuthHeader = (token: string | undefined): AxiosAuthConfig => {
  const tokenWithBearer = `Bearer ${token}`;
  return { headers: { Authorization: tokenWithBearer } };
};
