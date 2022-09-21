export const INBOX = [
	{
		"mId": "guid-1",
		"unread": true,
		"subject" : "Training Program",
		"content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
	},
	{
		"mId": "guid-2",
		"unread": false,
		"subject" : "Empower your future",
		"content" : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
	}
]

export const SPAM = [
	{
		"mId": "guid-3",
		"unread": true,
		"subject" : "Pre Approved Loan",
		"content" : "Congratulations ! <u>Credit card<u> is being shipped to you today!"
	},
	{
		"mId": "guid-4",
		"unread": true,
		"subject" : "You won a lottery!",
		"content" : "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
	}
]

export const FOLDERS = [
    {
        name: "Inbox",
		linkedTo: INBOX,
        id: "inbox"
    },
    {
        name: "Spam",
		linkedTo: SPAM,
        id: "spam"
    },
	{
		name: "Deleted Items",
		linkedTo:[],
		id:"deleted"
	}

]