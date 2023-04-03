export interface CompanyMemberModel {
    avatar: string;
    description?: string;
    name: string;
    slogan: string;
    positions: {
        name: string;
        description?: string;
        permission: string;
    }
}