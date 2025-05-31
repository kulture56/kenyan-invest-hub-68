export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          author_avatar: string | null
          author_name: string | null
          author_username: string | null
          comments: number | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          is_verified: boolean | null
          likes: number | null
          shares: number | null
          timestamp: string | null
          topic: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          author_avatar?: string | null
          author_name?: string | null
          author_username?: string | null
          comments?: number | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_verified?: boolean | null
          likes?: number | null
          shares?: number | null
          timestamp?: string | null
          topic: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          author_avatar?: string | null
          author_name?: string | null
          author_username?: string | null
          comments?: number | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_verified?: boolean | null
          likes?: number | null
          shares?: number | null
          timestamp?: string | null
          topic?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age_group: string | null
          analytics_consent: boolean | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          gender: string | null
          id: string
          last_login: string | null
          location: string | null
          privacy_avatar: string | null
          privacy_bio: string | null
          privacy_full_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age_group?: string | null
          analytics_consent?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          gender?: string | null
          id?: string
          last_login?: string | null
          location?: string | null
          privacy_avatar?: string | null
          privacy_bio?: string | null
          privacy_full_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age_group?: string | null
          analytics_consent?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          gender?: string | null
          id?: string
          last_login?: string | null
          location?: string | null
          privacy_avatar?: string | null
          privacy_bio?: string | null
          privacy_full_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rafiki_chat_history: {
        Row: {
          created_at: string
          id: string
          message: string
          response: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          response: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          response?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
