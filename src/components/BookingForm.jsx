export const BookingForm = () => {
    return (<form>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="res-date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
    </form>)
}