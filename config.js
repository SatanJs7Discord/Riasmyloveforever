module.exports = {
    BOT_SETTINGS: {
        BOT_TOKEN: 'ODA5MDAwMzUwODMyNzg3NDU3.YCOuSg.WeOhCIlylOsSUgDPnzlXv-F-u8I',
        YT_API_KEY: 'AIzaSyBiXg59AI66x7fee6Qhi346iTRFjgxFPh4',
        COMMAND_PREFIX: 'r!',
        EMBED_COLOR: 'BLUE',
        MUTE_ROLE: 'ROLEID',
        BANNED_WORDS: [`bitch`, `fuck`, `word3`],
        BYPASS_ROLES: [],
        BANNED_LINKS: ['www.', 'https://', '.com', '.net', '.gov', '.co', '.uk', '.gg', '.live'],
        BYPASS_LINKS_ROLES: [`745498113032323083`],
        Member_Count_Channel: '676021770289020929',
        Guild_ID: 'SERVER_ID',
        Kick_On_Warnings: true,
        Warnings_Until_Kick: '5',
        Time_Muted: '1m',
        Roles_On_Join: [`ROLEID`]
    },
    VERIFICATION: {
        Enabled: false,
        Verify_Channel: 'CHANNELID',
        Verify_Role: 'ROLEID',
        Role_To_Remove: 'ROLEID'
    },
    USER_DMS: {
        Enabled: true,
        Dm_Category: 'CATEGORY_ID',
        Dm_Channel_Name: 'new-dm-{user}',
        View_Dmchannels_Roles: [`ROLEID`]
    },
    Ping_Prevention: {
        Enabled: true,
        Enabled_Types: 'user',
        Max_Channel_Pings: '5',
        Max_Role_Pings: '5',
        Max_User_Pings: '5',
        Max_Pings: '10',
        Punishment: 'kick',
        Bypass_Roles: []
    },
    LOCKDOWN_KICK: {
        Enabled: true,
        Kick_Message: '{server} is currently in LOCKDOWN MODE! We have kicked you for the time, please try joining back later {member}. '
    },
    LEVELING_SYSTEM: {
        Enabled: true,
        Remove_XP_On_Leave: false,
        Level_Up_Message: '{user} has just reached level {level}!',
        Level_Up_Channel_ID: 'CHANNELID'
    },
    LOGGING: {
        Report_Channel: 'CHANNELID',
        Ban_Channel_Logs: 'CHANNELID',
        Unban_Channel_Logs: 'CHANNELID',
        Kick_Channel_Logs: 'CHANNELID',
        Warn_Channel_Logs: 'CHANNELID',
        Mute_Channel_Logs: 'CHANNELID',
        Lock_Channel_Logs: 'CHANNELID',
        Ticket_Channel_Logs: 'CHANNELID',
        Moderation_Channel_Logs: 'CHANNELID',
        Server_Updates: 'CHANNELID',
        Voice_Updates: 'CHANNELID'
    },
    TICKET_SYSTEM: {
        TICKET_CATEGORY: 'CATEGORY_ID',
        SUPPORT_TEAM_ROLES: 'ROLEID',
    },
    GREETING_SYSTEM: {
        Enabled: true,
        Welcome_Channel: 'CHANNELID',
        Welcome_Type: 'card',
        Welcome_Cards_Image_Link: 'https://i.ibb.co/VmGzHKv/wwwwwwwwwwwwwwww.png',
        Welcome_Message: 'Welcome {member} to the server, You are our {joinPosition} member!',
        Welcome_Embed: {
            title: '{member.username} has just joined the server!',
            description: 'Welcome {member} to the server, You are our {joinPosition} member!',
            color: 'blue'
        }
    }
}