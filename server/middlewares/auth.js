import { clerkClient } from "@clerk/express";

// Middleware to check usesId and has PremiumPlan

// Add (req, res, next) as parameters here
export const auth = async (req, res, next) => {
    try {
        // req.auth() is provided by Clerk's express middleware when it runs before yours
        const { userId, has } = req.auth; // Corrected: access .auth property from req
        
        // Ensure userId exists before proceeding
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized: No user ID provided by Clerk." });
        }

        const hasPremiumPlan = await has({ plan: 'premium' });

        const user = await clerkClient.users.getUser(userId);

        if (!hasPremiumPlan && user.privateMetadata.free_usage !== undefined) { // Check for undefined
            req.free_usage = user.privateMetadata.free_usage;
        } else {
            // Initialize or reset free_usage if not premium or if it's undefined
            const newFreeUsage = hasPremiumPlan ? 0 : (user.privateMetadata.free_usage || 0); // If premium, set to 0, otherwise maintain or set to 0 if undefined
            
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: newFreeUsage
                }
            });
            req.free_usage = newFreeUsage;
        }

        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next(); // Call next() to pass control to the next middleware or route
    } catch (error) {
        console.error("Authentication middleware error:", error); // Log the actual error for debugging
        res.status(500).json({ success: false, message: error.message || "Authentication failed." }); // Send 500 for server errors
    }
};