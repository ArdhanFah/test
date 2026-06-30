import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/+esm';

// These should come from environment variables in production
const getEnv = (key) => {
    try {
        return (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env[key] : null;
    } catch (e) {
        return null;
    }
};

const SUPABASE_URL = getEnv('VITE_SUPABASE_URL') || 'https://rawhejzhqoiehlcfpuki.supabase.co';
const SUPABASE_ANON_KEY = getEnv('VITE_SUPABASE_ANON_KEY') || 'sb_publishable_2pjq_-5nDnK0V1ehTA-S0Q_iqh20m5B';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Database Types
export const Tables = {
    PROFILES: 'profiles',
    COUPLES: 'couples',
    COUPLE_MEMBERS: 'couple_members',
    MESSAGES: 'messages',
    MEMORIES: 'memories',
    TRANSACTIONS: 'transactions',
    BUDGETS: 'budgets',
    SAVINGS_GOALS: 'savings_goals',
    DATE_PLANS: 'date_plans',
    WISHLIST: 'wishlist',
    NOTIFICATIONS: 'notifications',
    MISSIONS: 'missions',
    USER_MISSIONS: 'user_missions',
    LEVELS: 'levels',
    USER_LEVELS: 'user_levels'
};

// Realtime Channels
export const Channels = {
    MESSAGES: 'messages-channel',
    NOTIFICATIONS: 'notifications-channel',
    COUPLE_UPDATES: 'couple-updates-channel'
};
