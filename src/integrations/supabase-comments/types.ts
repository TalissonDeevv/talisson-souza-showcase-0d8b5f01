export type CommentsDatabase = {
  public: {
    Tables: {
      comment_reactions: {
        Row: {
          comment_id: string;
          user_id: string;
          reaction: "like" | "dislike";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          comment_id: string;
          user_id: string;
          reaction: "like" | "dislike";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          comment_id?: string;
          user_id?: string;
          reaction?: "like" | "dislike";
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      comments: {
        Row: {
          id: string;
          article_slug: string;
          user_id: string;
          parent_id: string | null;
          content: string;
          is_deleted: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          article_slug: string;
          user_id: string;
          parent_id?: string | null;
          content: string;
          is_deleted?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          article_slug?: string;
          user_id?: string;
          parent_id?: string | null;
          content?: string;
          is_deleted?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      discord_profiles: {
        Row: {
          id: string;
          discord_id: string;
          username: string;
          global_name: string | null;
          avatar_url: string | null;
          is_verified: boolean;
          guild_joined: boolean;
          role_granted: boolean;
          created_at: string;
          last_login_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          discord_id: string;
          username: string;
          global_name?: string | null;
          avatar_url?: string | null;
          is_verified?: boolean;
          guild_joined?: boolean;
          role_granted?: boolean;
          created_at?: string;
          last_login_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          discord_id?: string;
          username?: string;
          global_name?: string | null;
          avatar_url?: string | null;
          is_verified?: boolean;
          guild_joined?: boolean;
          role_granted?: boolean;
          created_at?: string;
          last_login_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_roles: {
        Row: {
          id: string;
          user_id: string;
          role: CommentsDatabase["public"]["Enums"]["app_role"];
        };
        Insert: {
          id?: string;
          user_id: string;
          role: CommentsDatabase["public"]["Enums"]["app_role"];
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: CommentsDatabase["public"]["Enums"]["app_role"];
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      has_role: {
        Args: {
          _user_id: string;
          _role: CommentsDatabase["public"]["Enums"]["app_role"];
        };
        Returns: boolean;
      };
      stats_comments_by_article: {
        Args: Record<PropertyKey, never>;
        Returns: {
          article_slug: string;
          total: number;
        }[];
      };
      stats_comments_total: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      stats_most_commented_article: {
        Args: Record<PropertyKey, never>;
        Returns: {
          article_slug: string;
          total: number;
        }[];
      };
      stats_readers_total: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
    };
    Enums: {
      app_role: "admin" | "moderator" | "user";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
