import Instabug from "instabug-reactnative";

Instabug.startWithToken("token: string", [""]);
Instabug.setColorTheme("colorTheme: string");
Instabug.setPrimaryColor(1);
Instabug.setFloatingButtonEdge();
Instabug.setLocale("locale: string");
Instabug.setStringToKey("key: string");
Instabug.setWelcomeMessageMode("welcomeMsg: string");
Instabug.identifyUserWithEmail("email: string", "name: string");
Instabug.setUserAttribute("key: string", "value: string");
Instabug.getUserAttribute("key: string", (attribute) => 1);
Instabug.getAllUserAttributes((allAttributes) => 1);
Instabug.removeUserAttribute("key: string");
Instabug.setUserData("key: string");
Instabug.logOut();
Instabug.logVerbose("info: string");
Instabug.logInfo("info: string");
Instabug.logDebug("info: string");
Instabug.logError("info: string");
Instabug.logWarn("info: string");
Instabug.setUserStepsEnabled(true);
Instabug.setAutoScreenRecordingEnabled(false);
Instabug.setAutoScreenRecordingMaxDuration(10000);
Instabug.setViewHierarchyEnabled(true);
Instabug.resetTags();
Instabug.getTags((tags) => 1);
Instabug.appendTags([""]);
Instabug.setSessionProfilerEnabled(false);
Instabug.setCrashReportingEnabled(true);
Instabug.setChatNotificationEnabled(false);
Instabug.getUnreadMessagesCount((count) => 1);
Instabug.setOnNewMessageHandler(() => 1);
Instabug.setPromptOptionsEnabled(true, true, true);
Instabug.setSurveysEnabled(false);
Instabug.setPostInvocationHandler();
