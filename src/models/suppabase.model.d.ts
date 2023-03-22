export interface SupabaseDatabaseModel {
    public: {
        Tables: {
            movies: {
                Row: {} // The data expected to be returned from a "select" statement.
                Insert: {} // The data expected passed to an "insert" statement.
                Update: {} // The data expected passed to an "update" statement.
            }
        }
    }
}

export interface SupabaseResponseModel {
    data: any;
    error: any;
}