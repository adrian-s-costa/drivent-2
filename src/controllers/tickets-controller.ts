import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import ticketService from "@/services/tickets-service"

export async function getTickets(req: AuthenticatedRequest, res: Response){
    try {
        const tickets = await ticketService.getAllTickets();
        return res.status(httpStatus.OK).send(tickets);
    }catch (error){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function getTicketsById(req: AuthenticatedRequest, res: Response){
    
}