import { createClient } from '@supabase/supabase-js';
import SupabaseClient from '@supabase/supabase-js/dist/module/SupabaseClient';
import { SupabaseDatabaseModel, SupabaseResponseModel } from '../models/suppabase.model';

export class DatabaseService {
    private _url!: string;
    private key!: string;
    private supabase!: SupabaseClient;

    constructor( databaseURl: string, databaseKey: string ) {
        this._url = databaseURl;
        this.key = databaseKey;

        this.supabase = createClient<SupabaseDatabaseModel>(
            this._url,
            this.key
        );
    }

    public async getMembers(): Promise<SupabaseResponseModel> {
        return this.supabase
            .from('members')
            .select('name, avatar, description, slogan, positions:position (name, permission, description)')
            .order('id', { ascending: true });
    }
}
