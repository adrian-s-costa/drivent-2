import { prisma } from "@/config";
import { Ticket } from "@prisma/client";

async function getAllTickets(){
    return prisma.ticketType.findMany();
}

const ticketRepository = {
    getAllTickets
};

export default ticketRepository;