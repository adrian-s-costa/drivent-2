import { getTickets, getTicketsById, postTicket } from "@/controllers/tickets-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter
.all("/*", authenticateToken)
.get("/types", getTickets)
.get("/", getTicketsById)
.post("/", postTicket)

export { ticketsRouter };