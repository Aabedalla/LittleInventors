import { connectDB } from "@/lib/mongodb";
import Message from "../../../models/Message";

export async function DELETE(request, context) {
    try {
        await connectDB();

        const { id } = await context.params; // ← هنا لازم await

        const deleted = await Message.findByIdAndDelete(id);

        if (!deleted) {
            return Response.json(
                { error: "Message not found" },
                { status: 404 }
            );
        }

        return Response.json(
            { message: "Message deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("DELETE ERROR:", error);
        return Response.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
